import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return (
      <Typography variant="h6" color="error">
        User not found.
      </Typography>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Location: {user.location}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Occupation: {user.occupation}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Description: {user.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/photos/${userId}`}
          style={{ marginTop: "16px" }}
        >
          View Photos
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserDetail;