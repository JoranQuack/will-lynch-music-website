import SVG from "react-inlinesvg";

interface SectionTransitionProps {
    bgClassName: string;
    curveClassName: string;
}

export default function SectionTransition({ bgClassName, curveClassName }: SectionTransitionProps) {
    return (
        <div className={`${bgClassName} w-screen h-fit`}>
            <SVG src="section_transition.svg" className={curveClassName}/>
        </div>
    )
}