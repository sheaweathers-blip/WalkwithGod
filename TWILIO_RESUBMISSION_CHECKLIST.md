# Twilio Toll-Free Resubmission Checklist

Twilio rejected the toll-free verification because they could not confirm clear user consent for text messaging.

Use this checklist before resubmitting.

## 1. Deploy The Latest App Changes

Push the current app files to GitHub and let Railway redeploy.

These pages must be live:

- https://walk-with-god.org/twilio-opt-in-proof.html
- https://walk-with-god.org/sms-consent.html
- https://walk-with-god.org/privacy.html
- https://walk-with-god.org/terms.html

## 2. Open The Pages In A Browser

Before resubmitting, open each page yourself in a normal browser.

Confirm:

- The proof page says `SMS Opt-In Proof`.
- The proof page explains the account/login opt-in steps.
- The proof page shows the checkbox consent wording.
- The consent page says text reminders are optional.
- Privacy and Terms pages load.

## 3. Twilio Opt-In Policy Proof

Paste these URLs into Twilio's opt-in policy proof box:

```text
https://walk-with-god.org/twilio-opt-in-proof.html
https://walk-with-god.org/sms-consent.html
```

## 4. Twilio Terms And Conditions URL

Use:

```text
https://walk-with-god.org/terms.html
```

## 5. Twilio Privacy Policy URL

Use:

```text
https://walk-with-god.org/privacy.html
```

## 6. Message Use Case Description

Use this if Twilio asks what the messages are for:

```text
Walk With God sends optional daily faith reminder text messages to users who create an account, choose text reminders in Reminder Settings, provide their phone number, and check the SMS consent box. Messages may include daily Scripture focus reminders, prayer/reflection prompts, and account-related reminder updates. Message frequency may vary, up to 1 message per day. Users can reply STOP to opt out and HELP for help.
```

## 7. Example Message

Use this if Twilio asks for sample message content:

```text
Walk With God reminder: Spend 15-20 minutes with God today. Read your daily Scripture focus, move your body, pray, and take one faithful next step. Reply STOP to opt out or HELP for help.
```

## 8. Incoming SMS Webhook

If Twilio asks where incoming messages should go, use:

```text
https://walk-with-god.org/api/twilio/sms
```

Method:

```text
POST
```

This endpoint handles HELP and STOP replies.

## 9. Important Timing

The rejection email said the prioritized resubmission window expires on July 7, 2026.

Resubmit before that date if possible.
