import { CalendarCheck, CalendarClock, CalendarX } from "lucide-react";
import { useTranslation } from "react-i18next";

interface OpenHours {
  from: string;
  to: string;
}

interface WorkingHours {
  day: string;
  hours: OpenHours | "closed";
}

const workingHours: WorkingHours[] = [
  { day: "monday", hours: { from: "08:00", to: "18:00" } },
  { day: "tuesday", hours: { from: "08:00", to: "18:00" } },
  { day: "wedneday", hours: { from: "08:00", to: "18:00" } },
  { day: "thursday", hours: { from: "08:00", to: "18:00" } },
  { day: "friday", hours: { from: "08:00", to: "18:00" } },
  { day: "saturday", hours: "closed" },
  { day: "sunday", hours: "closed" },
];

const WorkHourIndicator = () => {
  const getStatus = () => {
    const now = new Date(); // Already in GMT+2

    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wedneday",
      "thursday",
      "friday",
      "saturday",
    ];

    const today = daysOfWeek[now.getDay()];
    const todayHours = workingHours.find((d) => d.day === today);

    if (!todayHours || todayHours.hours === "closed") {
      return {
        icon: <CalendarX className="size-4" />,
        className: "text-red-600",
        text: "closed",
      };
    }

    // TypeScript narrowing
    const { from, to } = todayHours.hours;

    const [fromHour, fromMinute] = from.split(":").map(Number);
    const [toHour, toMinute] = to.split(":").map(Number);

    const fromDate = new Date(now);
    fromDate.setHours(fromHour, fromMinute, 0, 0);

    const toDate = new Date(now);
    toDate.setHours(toHour, toMinute, 0, 0);

    const thirtyMinsBeforeClose = new Date(toDate.getTime() - 30 * 60000);

    if (now >= fromDate && now < thirtyMinsBeforeClose) {
      return {
        icon: <CalendarCheck className="size-4" />,
        className: "text-green-600",
        text: "open",
      };
    } else if (now >= thirtyMinsBeforeClose && now < toDate) {
      return {
        icon: <CalendarClock className="size-4" />,
        className: "text-amber-600",
        text: "closing",
      };
    } else {
      return {
        icon: <CalendarX className="size-4" />,
        className: "text-red-600",
        text: "closed",
      };
    }
  };

  const { icon, className, text } = getStatus();

  const { t } = useTranslation();

  return (
    <p className={`flex flex-row items-center gap-2 ${className}`}>
      {icon}
      {t(`officeStatus.${text}`)}
    </p>
  );
};

export default WorkHourIndicator;
