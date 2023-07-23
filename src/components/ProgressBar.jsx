export default function ProgressBar({ progress }) {
    return (
        <div className="progress-bar">
            <div style={{
                height: "15px",
                width: `${progress}%`,
                backgroundColor: "black",
                borderRadius: "8px",
                transition: "width 0.2s ease-in-out"
                }}>
            </div>
        </div>
    )
}