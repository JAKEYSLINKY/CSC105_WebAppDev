import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
// import { useNavigate } from "react-router-dom";
import { CalendarMonth, Today } from "@mui/icons-material";

export default function BottomNav() {
  const [value, setValue] = React.useState("");
  // const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    // navigate(`/${newValue}`);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Incoming"
        value="todo"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction label="Today" value="today" icon={<Today />} />
      <BottomNavigationAction
        label="Calendar"
        value="calendar"
        icon={<CalendarMonth />}
      />
    </BottomNavigation>
  );
}

// import * as React from "react";
// import { BottomNavigation } from "@mui/material";
// import BottomNavigationAction from "@mui/material";
// import RestoreIcon from "@mui/icons-material";
// import { CalendarMonth, Today } from "@mui/icons-material";

// export default function () {
//   const [value, setValue] = React.useState("");
//   const navigate = useNavigation();
//   const handleChange = (event, NewValue) => {
//     setValue(newValue);
//   };

//   return (

//       <BottomNavigation
//         sx={{ width: "100%" }}
//         Value={Value}
//         Onchange={handleChange}
// 		>
// 		<BottomNavigationAction
// 		label="Incoming"
// 		Value="todo"
// 		icon={<RestoreIcon/>}
// 		/>
// 		<BottomNavigationAction
// 		label="Today"
// 		value="today"
// 		icon={<CalendarMonth/>}
// 		/>
// 		<BottomNavigation
// 		label="Calendar"
// 		value="calendar"
// 		icon={<CalendarMonth/>}
// 		/>
//       </BottomNavigation>

//   );
// }

// {
//   /* <BottomNavigation
//   showLabels
//   value={value}
//   onChange={(event, newValue) => {
//     setValue(newValue);
//   }}
// >
//   <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//   <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//   <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
// </BottomNavigation> */
// }
