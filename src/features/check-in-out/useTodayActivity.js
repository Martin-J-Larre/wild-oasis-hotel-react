import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { data: activities, isLoading } = useQuery({
    queryKey: ["today-Activity"],
    queryFn: getStaysTodayActivity,
  });

  return {
    activities,
    isLoading,
  };
}
