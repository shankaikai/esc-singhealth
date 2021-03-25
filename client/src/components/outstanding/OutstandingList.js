import { List, makeStyles } from "@material-ui/core";
import OutstandingItem from "./OutstandingItem";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: 0,
    marginTop: "64px",
    marginBottom: "56x",
    height: "calc(100vh - 119px)",
  },
  list: {
    padding: 0,
    overflow: "auto",
    height: "100%",
  },
});

var tempList = [
  {
    name: "Store 1",
    type: "F&B",
    location: "#01-25",
  },
  {
    name: "Store 2",
    type: "F&B",
    location: "#01-25",
  },
  {
    name: "Store 3",
    type: "Non-F&B",
    location: "#01-25",
  },
  {
    name: "Store 4",
    type: "F&B",
    location: "#01-25",
  },
  {
    name: "Store 5",
    type: "F&B",
    location: "#01-25",
  },
  {
    name: "Store 6",
    type: "F&B",
    location: "#01-25",
  },
  {
    name: "Store 7",
    type: "F&B",
    location: "#01-25",
  },
  {
    name: "Store 8",
    type: "F&B",
    location: "#01-25",
  },
  {
    name: "Store 9",
    type: "F&B",
    location: "#01-25",
  },
  {
    name: "Store 10",
    type: "F&B",
    location: "#01-25",
  },
];

const OutstandingList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {tempList.map((item) => (
          <OutstandingItem
            name={item.name}
            type={item.type}
            location={item.location}
          />
        ))}
      </List>
    </div>
  );
};

export default OutstandingList;