import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from "@mui/lab";
import { timeline_data } from "../../constants/appdata";
import { Typography } from '@mui/material';





const SeftTimeline = () => {
    return (
        <>
            <Timeline position="right" sx={{ direction: "ltr" }}>
                {timeline_data.map((item, index) => (
                    <TimelineItem key={index} sx={{ mt: 0 }}>
                        <TimelineOppositeContent color="text.secondary">
                            <Typography variant="body1" color="white">
                                {item.header}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="danger" variant="outlined">
                                {item.icon}
                            </TimelineDot>
                            {index !== 3 ? (<TimelineConnector sx={{ border: "1px solid red", }} />) : null}
                        </TimelineSeparator>
                        <TimelineContent>

                            <Typography variant="body2" color="white">
                                {item.text}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>

        </>
    )
};

export default SeftTimeline;