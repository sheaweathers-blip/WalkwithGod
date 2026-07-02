from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
DARK_GREEN = (21, 43, 35, 255)
MID_GREEN = (38, 72, 58, 255)
GOLD = (205, 161, 72, 255)


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


def draw_centered(draw, text, y, font, fill, width):
    bbox = draw.textbbox((0, 0), text, font=font)
    x = (width - (bbox[2] - bbox[0])) // 2
    draw.text((x, y), text, font=font, fill=fill)


def base_background(width, height):
    background = Image.open(ROOT / "assets" / "daily-devotion.png").convert("RGB")
    background = cover_crop(background, width, height).filter(ImageFilter.GaussianBlur(1.2))
    frame = Image.alpha_composite(background.convert("RGBA"), Image.new("RGBA", (width, height), (227, 239, 225, 86)))

    vignette = Image.new("L", (width, height), 0)
    draw = ImageDraw.Draw(vignette)
    draw.ellipse((-360, -260, width + 360, height + 360), fill=220)
    vignette = vignette.filter(ImageFilter.GaussianBlur(120))
    shade = Image.new("RGBA", (width, height), (19, 46, 37, 105))
    return Image.composite(frame, Image.alpha_composite(frame, shade), vignette.point(lambda value: 255 - value))


def mobile_background(width, height):
    frame = Image.new("RGBA", (width, height), (236, 242, 225, 255))
    glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(glow)
    draw.ellipse((-280, -170, width + 220, 760), fill=(248, 232, 171, 150))
    draw.ellipse((-240, 860, width + 190, height + 260), fill=(183, 216, 190, 145))
    draw.ellipse((width - 380, 260, width + 320, 1120), fill=(190, 220, 209, 95))
    glow = glow.filter(ImageFilter.GaussianBlur(86))
    frame = Image.alpha_composite(frame, glow)

    line_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(line_layer)
    draw.line((146, 0, width - 210, height), fill=(255, 255, 255, 74), width=16)
    draw.line((210, 0, width - 145, height), fill=(31, 75, 59, 31), width=5)
    return Image.alpha_composite(frame, line_layer)


def add_logo(frame, y, logo_size):
    width, height = frame.size
    logo = Image.open(ROOT / "assets" / "walk-with-god-logo.png").convert("RGBA")
    logo = logo.resize((logo_size, logo_size), Image.LANCZOS)
    x = (width - logo_size) // 2

    shadow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(shadow)
    padding = max(18, logo_size // 18)
    radius = max(62, logo_size // 6)
    draw.rounded_rectangle((x - padding, y - padding, x + logo_size + padding, y + logo_size + padding), radius=radius, fill=(8, 28, 22, 45))
    frame = Image.alpha_composite(frame, shadow.filter(ImageFilter.GaussianBlur(16)))

    panel = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(panel)
    draw.rounded_rectangle(
        (x - padding, y - padding, x + logo_size + padding, y + logo_size + padding),
        radius=radius,
        fill=(255, 255, 246, 165),
        outline=(255, 255, 255, 180),
        width=3,
    )
    frame = Image.alpha_composite(frame, panel)
    frame.alpha_composite(logo, (x, y))
    return frame


def save_card(kind):
    width, height = 1920, 1080
    frame = add_logo(base_background(width, height), 180 if kind == "title" else 210, 350)
    draw = ImageDraw.Draw(frame)
    serif_big = load_font("georgiab.ttf", 92)
    serif_mid = load_font("georgia.ttf", 40)
    sans_small = load_font("arial.ttf", 28)

    if kind == "title":
        draw_centered(draw, "Walk With God", 590, serif_big, DARK_GREEN, width)
        draw_centered(draw, "Premium Breathwork Prayer", 705, serif_mid, DARK_GREEN, width)
        draw_centered(draw, "Simply Breathe", 770, sans_small, DARK_GREEN, width)
    else:
        draw_centered(draw, "Begin with God", 615, serif_big, DARK_GREEN, width)
        draw_centered(draw, "one quiet breath at a time", 730, serif_mid, DARK_GREEN, width)

    frame.convert("RGB").save(OUT / f"logo-intro-{kind}-card.png", quality=95)


def save_mobile_card(kind):
    width, height = 1080, 1920
    frame = mobile_background(width, height)
    logo_y = 365 if kind == "title" else 420
    frame = add_logo(frame, logo_y, 560)
    draw = ImageDraw.Draw(frame)
    serif_big = load_font("georgiab.ttf", 92)
    serif_mid = load_font("georgia.ttf", 48)
    sans_small = load_font("arial.ttf", 34)

    if kind == "title":
        draw_centered(draw, "Walk With God", 1035, serif_big, DARK_GREEN, width)
        draw_centered(draw, "Premium Breathwork Prayer", 1170, serif_mid, DARK_GREEN, width)
        draw_centered(draw, "Simply Breathe", 1246, sans_small, MID_GREEN, width)
    else:
        draw_centered(draw, "Begin with God", 1080, serif_big, DARK_GREEN, width)
        draw_centered(draw, "one quiet breath at a time", 1212, serif_mid, DARK_GREEN, width)

    leaf = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(leaf)
    draw.arc((260, 1420, 820, 1740), 205, 332, fill=GOLD, width=9)
    draw.arc((330, 1455, 750, 1695), 205, 332, fill=(31, 75, 59, 125), width=5)
    frame = Image.alpha_composite(frame, leaf)
    frame.convert("RGB").save(OUT / f"logo-intro-mobile-{kind}-card.png", quality=95)


if __name__ == "__main__":
    save_card("title")
    save_card("end")
    save_mobile_card("title")
    save_mobile_card("end")
    print(f"Created intro cards in {OUT}")
