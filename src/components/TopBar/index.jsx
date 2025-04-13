import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const { userId } = useParams();

  // Determine the content to display on the right side of the TopBar
  let rightContent = "";
  if (location.pathname.startsWith("/users/") && userId) {
    const user = models.userModel(userId);
    if (user) {
      if (location.pathname.startsWith(`/photos/${userId}`)) {
        rightContent = `Photos of ${user.first_name} ${user.last_name}`;
      } else {
        rightContent = `${user.first_name} ${user.last_name}`;
      }
    }
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        {/* Left side: Developer's name */}
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
          Nguyen Minh Quan
        </Typography>

        {/* Right side: Dynamic content */}
        <Box>
          <Typography variant="h6" color="inherit">
            {rightContent}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;