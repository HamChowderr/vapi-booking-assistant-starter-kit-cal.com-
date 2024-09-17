# VAPI Blocks Appointment Scheduler Starter Kit

This starter kit enables you to quickly build a powerful Appointment Booking Voice Assistant using [VAPI](https://vapi.ai/?aff=nocodeprenuers). With pre-built UI components and seamless API integrations, it offers an easy, out-of-the-box solution for scheduling and appointment management.

### Required Files for Appointment Scheduler:

The following pre-defined files are necessary for the Appointment Scheduler to work:
- `env`
- `hooks/use-vapi.ts`
- `@/components/vapi/siri`
- `@/components/vapi/transcriber`
- `/api/vapi/check-availability`
- `/api/vapi/book-appointment`

### Environment Variables

To make this project work, add the following variables to your `.env` file:

```bash
NEXT_PUBLIC_VAPI_PUBLIC_KEY="<your_vapi_public_key>"
NEXT_PUBLIC_VAPI_ASSISTANT_ID="<your_assistant_id>"
CAL_API_KEY="<your_cal_api_key>"
CAL_USERNAME="<your_cal_username>"
CAL_USERID="<your_cal_user_id>"
```

Replace the placeholder values with your actual keys from the [Vapi Dashboard](https://vapi.ai/dashboard) and [Cal.com](https://cal.com/).

### Editing the Page

To edit the text on the page, go to `page.tsx`.

## Getting Started

Edit the `.env` file, then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Get $10 Free Credits With VAPI

1. Get signed up with [VAPI](https://vapi.ai/?aff=nocodeprenuers).

2. Create a blank Voice Assistant Template and add the following:

   - **First Message:**
   ```plaintext
   Hello this is Lisa from VAPI, how can I help you today?
   ```

   - **System Prompt:**
   ```plaintext
   You are an assistant integrated with Cal.com that schedules automation consultations. Your task is to interact with the Cal.com API to perform the following:

   1. **checkAvailability**: Use this function to check available consultation slots based on the user's preferred date and time.
      - Ask the user for their desired date and time range.
      - Trigger the `checkAvailability` function to verify available time slots.
      - Example:
      {
         "dateTo": "2024-08-01T06:06:13.371Z",
         "dateFrom": "2024-07-29T06:06:14.371Z"
      }

   2. **bookAppointment**: Once a time slot is confirmed, invoke the `bookAppointment` tool to secure the booking.
      - Collect the user's contact information (name, email, and phone number).
      - Use the `bookAppointment` function to schedule the consultation.
      - Confirm the booking and send the details to the user via email.
      - Example:
      {
        "start": "2024-09-29T18:00:00.000Z",
        "name": "John Doe",
        "email": "john@vapiblocks.com",
        "smsReminderNumber": "16803565600"
      }

   Instructions:
   - If no slots are available for the specified date, suggest alternative time slots using the `checkAvailability` function again.
   - Provide concise, polite communication.
   - Ensure that the user understands the consultation is about automating business processes to improve efficiency.

   Tool Invocation:
   - To check for available slots, invoke the **checkAvailability** tool.
   - To confirm the booking, invoke the **bookAppointment** tool.
   ```

## Credits

Vapi Blocks is inspired by other libraries like Shadcn UI, Aceternity, and MagicUI. Special thanks to [Cameron King](https://x.com/cameronyking4) as this template is based on [Vapi Blocks](https://www.vapiblocks.com/) and the [Next.js Tailwind VAPI Starter](https://github.com/cameronking4/next-tailwind-vapi-starter).
