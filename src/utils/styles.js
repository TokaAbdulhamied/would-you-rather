import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

export const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    display: "flex",
    flexDirection: "column",
  },
  cardImg: {
    margin: "15px auto 15px auto",
    width: "75%",
    height: "75%",
  },
  userImg: {
    height: "25%",
    width: "25%",
    margin: "25px",
  },
  header: (props) => ({
    backgroundColor: grey[200],
    color: "rgba(0, 0, 0, 0.87)",
    height: props.height,
    textAlign: props.align,
  }),
  content: {
    flex: "1 1 120px",
    display: "flex ",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  userCard: {
    display: "flex",
  },
  span: {
    borderLeft: `1px solid${grey[300]}`,
    marginTop: "20px",
    marginBottom: "20px",
  },
});
