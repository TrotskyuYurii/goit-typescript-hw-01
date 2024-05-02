// enum DayOfWeek {
//     Monday,
//      Tuesday,
//      Wednesday,
//      Thursday,
//      Friday,
//      Saturday,
//      Sunday
//     }
    
    
//     const isWeekend = (day) => {
//     }


enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  const isWeekend = (day: DayOfWeek): boolean => {
    const weekendDays = [DayOfWeek.Saturday, DayOfWeek.Sunday];
    return weekendDays.includes(day);
  };