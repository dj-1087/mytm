import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { elements } from "components/roadmap/lectures.json";
import { authService, dbService } from "fbase";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function GroupForm() {
  const classes = useStyles();
  const userObj = authService.currentUser;
  const lectures = elements.map((element) => element.name);
  const [lecture, setLecture] = useState(lectures[0]);
  const [groupType, setGroupType] = useState("스터디");
  const history = useHistory();

  const [studyGroup, setStudyGroup] = useState({
    group_name: "미등록",
    group_lecture: lectures[0],
    group_type: "스터디",
    group_numOfMembers: 0,
    group_goal: "미등록",
    group_plane: "미등록",
    group_qualification: "미등록",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("groups").add({
      info: studyGroup,
      createdAt: Date.now(),
      creator: {
        userId: userObj.uid,
        userName: userObj.displayName,
      } /*userObj.uid*/,
      applyUser: [],
      members: [],
    });
    setStudyGroup("");
    history.push("/roadmap");
  };

  const onChange = (e) => {
    console.log(e.target.name);
    setStudyGroup({
      ...studyGroup,
      [e.target.name]: e.target.value,
    });
  };
  const handleReset = () => {
    history.push("/roadmap");
  };

  useEffect(() => {
    if (userObj == undefined) {
      alert("로그인을 하십시오");
      history.push("/sign-in");
    }
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        그룹 폼
      </Typography>
      <form method="get" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="group_name"
              name="group_name"
              label="그룹 명"
              fullWidth
              autoComplete="given-name"
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="group_type"
              name="group_type"
              select
              label="그룹 속성"
              defaultValue={groupType}
              onChange={onChange}
              helperText="Please select your currency"
            >
              {["스터디", "튜터링"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="group_goal"
              name="group_goal"
              label="그룹 목표"
              fullWidth
              autoComplete="shipping address-line1"
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="group_lecture"
              name="group_lecture"
              select
              label="강좌명"
              defaultValue={lecture}
              helperText="Please select your currency"
              onChange={onChange}
            >
              {lectures.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={2}>
            <TextField
              id="group_plane"
              name="group_plane"
              label="학업 계획"
              multiline
              rows={4}
              placeholder="학업 계획"
              variant="outlined"
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="group_numOfMembers"
              name="group_numOfMembers"
              label="인원 수"
              fullWidth
              autoComplete="shipping address-level2"
              onChange={onChange}
            />
            <TextField
              id="group_qualification"
              name="group_qualification"
              label="자격 요건"
              fullWidth
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              type="reset"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleReset}
            >
              취소
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              그룹 생성
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
