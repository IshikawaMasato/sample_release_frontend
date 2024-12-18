import {TextField} from "@mui/material";
import {SetStateAction} from "react";

interface Props {
    label: string
    onChange: (value: SetStateAction<string>) => void
    type: string
}

export default function TextForm(props: Props) {
    return (
        <TextField
            fullWidth
            label={props.label}
            onChange={(e) => props.onChange(e.target.value)}
            type={props.type}
            sx={{
                mt: 3,
                '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'gray',
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'gray',
                },
                '& .Mui-focused .MuiInputLabel-root': {
                    color: 'gray',
                },
            }}
        />
    )
}
