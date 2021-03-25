import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { useHistory } from 'react-router-dom';
import HeaderDetails from "../common/HeaderDetails"

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        position: "relative",
        marginTop: "72px"
    },
    buttons: {
        margin: "10px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "120px",
        alignItems: "flex-start",
        padding: "0px",
        margin: "0px",
        marginRight: "5%",
    },
    container: {
        // display: "flex",
        // justifyContent: "space-between"
    },
    button: {
        color: "#F15A22",
    },
    icon: {
        color: "#F15A22",
        padding: "9px",
    }

});

const ViewTenant = (props) => {
    const classes = useStyles();
    let history = useHistory();
    // const auditID = props.auditID;

    var lines = [
        {
          header: "Type",
          text: "F&B"
        },
        {
          header: "Location",
          text: "#01-25"
        },
        {
          header: "Last Audit Date",
          text: "01 August 2020"
        },
        {
          header: "Demerit Points",
          text: "1"
        }
      ]

    const handleNewAudit = () => {
        // console.log(tenantID);
        history.push({
            pathname: "/auditchecklist",
            // state: { tenantID: tenantID},
        });
    }

    const handleEditTenant = () => {
        history.push({
            pathname: "/edittenant"
        });
    }

    return (
        <div className={classes.root}>
            <HeaderDetails details = {lines}/>
            <div className={classes.buttons}>
                <div className={classes.container}>
                    <IconButton ariaLabel="delete" className={classes.icon}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton ariaLabel="edit" className={classes.icon} onClick={()=> handleEditTenant()}>
                        <EditIcon />
                    </IconButton>
                </div>
                <Button variant="outlined" className={classes.button} onClick={() => handleNewAudit()}>
                    New Audit
            </Button>
            </div>
        </div>
    );
}

export default ViewTenant;