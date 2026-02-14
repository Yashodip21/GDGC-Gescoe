import DynamicText from "@/components/kokonutui/dynamic-text";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function Loader({ onComplete }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <BeamsBackground className="absolute inset-0 z-0" />

            <div className="relative z-10">
                <DynamicText onCycleComplete={onComplete} />
            </div>
        </div>
    );
}
