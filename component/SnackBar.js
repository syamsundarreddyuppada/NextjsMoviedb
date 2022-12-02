import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import styles from "../styles/snackbar.module.scss";

function SnackBar({ open, message }) {
  const [openModel, setOpenModel] = useState(open);
  return (
    <>
      {openModel ? (
        <div className={styles.snackbar_container}>
          <div>
            This is error message{" "}
            <IconButton onClick={() => setOpenModel(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default SnackBar;
