from pathlib import Path
import importlib.util

from PIL import ImageDraw


OUT = Path(__file__).resolve().parent
BASE_SCRIPT = OUT / "create_logo_intro_cards.py"

spec = importlib.util.spec_from_file_location("cards", BASE_SCRIPT)
cards = importlib.util.module_from_spec(spec)
spec.loader.exec_module(cards)


CARD_DATA = {
    "08": {
        "title": "Morning Energy",
        "scripture": "Psalm 118:24",
        "end_main": "This is the day",
        "end_sub": "receive it with God",
        "mobile_end_1": "This is",
        "mobile_end_2": "the day",
        "mobile_end_sub": "receive it with God",
    },
    "09": {
        "title": "Clear Thinking",
        "scripture": "James 1:5",
        "end_main": "Ask God for wisdom",
        "end_sub": "and listen for the next step",
        "mobile_end_1": "Ask God",
        "mobile_end_2": "for wisdom",
        "mobile_end_sub": "listen for the next step",
    },
    "10": {
        "title": "Confidence",
        "scripture": "Joshua 1:9",
        "end_main": "God is with you",
        "end_sub": "be strong and courageous",
        "mobile_end_1": "God is",
        "mobile_end_2": "with you",
        "mobile_end_sub": "be strong and courageous",
    },
    "11": {
        "title": "Focus Flow",
        "scripture": "Colossians 3:23",
        "end_main": "This work is for God",
        "end_sub": "one faithful task at a time",
        "mobile_end_1": "This work",
        "mobile_end_2": "is for God",
        "mobile_end_sub": "one faithful task at a time",
    },
    "12": {
        "title": "Productivity Reset",
        "scripture": "Psalm 90:12",
        "end_main": "My time is Yours",
        "end_sub": "teach me wisdom",
        "mobile_end_1": "My time",
        "mobile_end_2": "is Yours",
        "mobile_end_sub": "teach me wisdom",
    },
    "13": {
        "title": "Mental Clarity",
        "scripture": "Romans 12:2",
        "end_main": "Renew my mind",
        "end_sub": "anchor me in truth",
        "mobile_end_1": "Renew",
        "mobile_end_2": "my mind",
        "mobile_end_sub": "anchor me in truth",
    },
    "14": {
        "title": "Weekend Recharge",
        "scripture": "Exodus 33:14",
        "end_main": "God gives rest",
        "end_sub": "release the week to Him",
        "mobile_end_1": "God gives",
        "mobile_end_2": "rest",
        "mobile_end_sub": "release the week to Him",
    },
}


def save_card(number, data, kind):
    width, height = 1920, 1080
    frame = cards.add_logo(cards.base_background(width, height), 150 if kind == "opening" else 165, 330)
    draw = ImageDraw.Draw(frame)
    serif_big = cards.load_font("georgiab.ttf", 92)
    serif_mid = cards.load_font("georgia.ttf", 40)
    sans_small = cards.load_font("arial.ttf", 28)
    sans_tiny = cards.load_font("arial.ttf", 24)

    cards.draw_centered(draw, "Walk With God", 560 if kind == "opening" else 555, serif_big, cards.DARK_GREEN, width)
    if kind == "opening":
        cards.draw_centered(draw, "Abide Breath Prayer", 680, serif_mid, cards.DARK_GREEN, width)
        cards.draw_centered(draw, data["title"], 748, sans_small, cards.MID_GREEN, width)
        cards.draw_centered(draw, data["scripture"], 800, sans_tiny, cards.GOLD, width)
        filename = f"breathwork-{number}-opening-logo-card.png"
    else:
        cards.draw_centered(draw, data["end_main"], 680, serif_mid, cards.DARK_GREEN, width)
        cards.draw_centered(draw, data["end_sub"], 748, sans_small, cards.MID_GREEN, width)
        cards.draw_centered(draw, data["scripture"], 800, sans_tiny, cards.GOLD, width)
        filename = f"breathwork-{number}-ending-card.png"

    frame.convert("RGB").save(OUT / filename, quality=95)


def save_mobile_card(number, data, kind):
    width, height = 1080, 1920
    frame = cards.mobile_background(width, height)
    frame = cards.add_logo(frame, 315 if kind == "opening" else 350, 540)
    draw = ImageDraw.Draw(frame)
    serif_big = cards.load_font("georgiab.ttf", 92)
    serif_mid = cards.load_font("georgia.ttf", 48)
    sans_small = cards.load_font("arial.ttf", 34)
    sans_tiny = cards.load_font("arial.ttf", 28)

    cards.draw_centered(draw, "Walk With God", 980 if kind == "opening" else 1015, serif_big, cards.DARK_GREEN, width)
    if kind == "opening":
        cards.draw_centered(draw, "Abide Breath Prayer", 1110, serif_mid, cards.DARK_GREEN, width)
        cards.draw_centered(draw, data["title"], 1192, sans_small, cards.MID_GREEN, width)
        cards.draw_centered(draw, data["scripture"], 1260, sans_tiny, cards.GOLD, width)
        filename = f"breathwork-{number}-mobile-opening-logo-card.png"
    else:
        cards.draw_centered(draw, data["mobile_end_1"], 1145, serif_mid, cards.DARK_GREEN, width)
        cards.draw_centered(draw, data["mobile_end_2"], 1210, serif_mid, cards.DARK_GREEN, width)
        cards.draw_centered(draw, data["mobile_end_sub"], 1300, sans_small, cards.MID_GREEN, width)
        cards.draw_centered(draw, data["scripture"], 1362, sans_tiny, cards.GOLD, width)
        filename = f"breathwork-{number}-mobile-ending-card.png"

    leaf = cards.Image.new("RGBA", (width, height), (0, 0, 0, 0))
    leaf_draw = cards.ImageDraw.Draw(leaf)
    leaf_draw.arc((260, 1420, 820, 1740), 205, 332, fill=cards.GOLD, width=9)
    leaf_draw.arc((330, 1455, 750, 1695), 205, 332, fill=(31, 75, 59, 125), width=5)
    frame = cards.Image.alpha_composite(frame, leaf)
    frame.convert("RGB").save(OUT / filename, quality=95)


if __name__ == "__main__":
    for number, data in CARD_DATA.items():
        save_card(number, data, "opening")
        save_card(number, data, "ending")
        save_mobile_card(number, data, "opening")
        save_mobile_card(number, data, "ending")
    print(f"Created Breathwork 8 through 14 cards in {OUT}")
