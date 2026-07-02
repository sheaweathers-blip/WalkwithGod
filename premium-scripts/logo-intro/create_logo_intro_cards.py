from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
WIDTH, HEIGHT = 1920, 1080


def load_font(name, size):
    font_dir = Path("C:/Windows/Fonts")
    for candidate in (name, "georgiab.ttf", "georgia.ttf", "arial.ttf"):
        path = font_dir / candidate
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def cover_crop(image, width, height):
    scale = max(width / image.width, height / image.height)
    image = image.resize((int(image.width * scale), int(image.height * scale)), Image.LANCZOS)
    left = (image.width - width) // 2
    top = (image.height - height) // 2
    return image.crop((left, top, left + width, top + height))


def draw_centered(draw, text, y, font, fill):
    bbox = draw.textbbox((0, 0), text, font=font)
    x = (WIDTH - (bbox[2] - bbox[0])) // 2
    draw.text((x, y), text, font=font, fill=fill)


def base_background():
    background = Image.open(ROOT / "assets" / "daily-devotion.png").convert("RGB")
    background = cover_crop(background, WIDTH, HEIGHT).filter(ImageFilter.GaussianBlur(1.2))
    frame = Image.alpha_composite(background.convert("RGBA"), Image.new("RGBA", (WIDTH, HEIGHT), (227, 239, 225, 86)))

    vignette = Image.new("L", (WIDTH, HEIGHT), 0)
    draw = ImageDraw.Draw(vignette)
    draw.ellipse((-360, -260, WIDTH + 360, HEIGHT + 360), fill=220)
    vignette = vignette.filter(ImageFilter.GaussianBlur(120))
    shade = Image.new("RGBA", (WIDTH, HEIGHT), (19, 46, 37, 105))
    return Image.composite(frame, Image.alpha_composite(frame, shade), vignette.point(lambda value: 255 - value))


def add_logo(frame, y):
    logo_size = 350
    logo = Image.open(ROOT / "assets" / "walk-with-god-logo.png").convert("RGBA")
    logo = logo.resize((logo_size, logo_size), Image.LANCZOS)
    x = (WIDTH - logo_size) // 2

    shadow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(shadow)
    draw.rounded_rectangle((x - 18, y - 18, x + logo_size + 18, y + logo_size + 18), radius=62, fill=(8, 28, 22, 45))
    frame = Image.alpha_composite(frame, shadow.filter(ImageFilter.GaussianBlur(16)))

    panel = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(panel)
    draw.rounded_rectangle(
        (x - 20, y - 20, x + logo_size + 20, y + logo_size + 20),
        radius=62,
        fill=(255, 255, 246, 165),
        outline=(255, 255, 255, 180),
        width=3,
    )
    frame = Image.alpha_composite(frame, panel)
    frame.alpha_composite(logo, (x, y))
    return frame


def save_card(kind):
    frame = add_logo(base_background(), 180 if kind == "title" else 210)
    draw = ImageDraw.Draw(frame)
    serif_big = load_font("georgiab.ttf", 92)
    serif_mid = load_font("georgia.ttf", 40)
    sans_small = load_font("arial.ttf", 28)

    if kind == "title":
        draw_centered(draw, "Walk With God", 590, serif_big, (21, 43, 35, 255))
        draw_centered(draw, "Premium Breathwork Prayer", 705, serif_mid, (38, 72, 58, 255))
        draw_centered(draw, "Simply Breathe", 770, sans_small, (72, 96, 83, 255))
    else:
        draw_centered(draw, "Begin with God", 615, serif_big, (21, 43, 35, 255))
        draw_centered(draw, "one quiet breath at a time", 730, serif_mid, (38, 72, 58, 255))

    frame.convert("RGB").save(OUT / f"logo-intro-{kind}-card.png", quality=95)


if __name__ == "__main__":
    save_card("title")
    save_card("end")
    print(f"Created intro cards in {OUT}")
