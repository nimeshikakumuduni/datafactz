import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import useStyles from "./careers_page_blog_styles";

function CareersPageBlog() {
  const classes = useStyles();
  function createData(
    JobTitle: string,
    Department: string,
    Type: string,
    Location: string
  ) {
    return { JobTitle, Department, Type, Location };
  }

  const rows = [
    createData(
      "Programmer Analyst I – MicroStrategy",
      "Business Intelligence",
      "Full Time",
      "Nationwide"
    ),
    createData(
      "Programmer Analyst II – Microsoft (SSRS,SSAS, PowerBI)",
      "Business Intelligence",
      "Full Time",
      "Nationwide"
    ),
    createData(
      "Programmer Analyst III – Informatica",
      "Business Intelligence",
      "Full Time",
      "Nationwide"
    ),
    createData(
      "Programmer Analyst IV – Talend",
      "Business Intelligence",
      "Full Time",
      "Nationwide"
    ),
    createData(
      "Programmer Analyst V – Microsoft (SQL Server, SSIS)",
      "Business Intelligence",
      "Full Time",
      "Nationwide"
    ),
    createData(
      "Programmer Analyst VI – Big Data Engineer",
      "Business Intelligence",
      "Full Time",
      "Nationwide"
    ),
    createData(
      "Data Scientist",
      "Business Intelligence",
      "Full Time",
      "Nationwide"
    ),
  ];
  return (
    <div className={classes.posts}>
      <div className={classes.maincontent}>
        <div className={classes.title}>Available Positions</div>

        <div className={classes.content}>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead className={classes.tablehead}>
                <TableRow>
                  <TableCell className={classes.headtitle}>Job Title</TableCell>
                  <TableCell className={classes.headtitle}>Department</TableCell>
                  <TableCell className={classes.headtitle}> Type</TableCell>
                  <TableCell className={classes.headtitle}> Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.JobTitle}>
                    <TableCell component="th" scope="row" className={classes.jobtitle}>
                      {row.JobTitle}
                    </TableCell>
                    <TableCell align="left">{row.Department}</TableCell>
                    <TableCell align="left">{row.Type}</TableCell>
                    <TableCell align="left">{row.Location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <p className={classes.contentfont}>
          E-mail: careers@datafactz.com for open positions.
        </p>
      </div>
    </div>
  );
}
export default CareersPageBlog;
