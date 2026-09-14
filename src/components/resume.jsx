import { FaFileDownload } from "react-icons/fa";

export default function Resume() {
  const resumeLink = "https://drive.google.com/file/d/1whm9wbodUBFsDM7DmVjONtfyzcgrD2g1/view?usp=sharing"; 

  return (
    // Changed bg-white to bg-transparent or bg-slate-950 to match App.js
    <div id="Resume" className="bg-slate-950 py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Title */}
        <div className="mb-12">
          {/* text-purple-600 looks great on dark backgrounds */}
          <h2 className="text-purple-500 text-4xl font-bold">Resume</h2>
          <div className="h-1 w-16 bg-purple-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Action Button */}
        <a
          href={resumeLink}
          target="_blank" // Added target blank for Google Drive links
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/20"
        >
          <FaFileDownload /> Download Resume
        </a>

        {/* Optional: Add a small note about the file */}
        <p className="mt-4 text-slate-400 text-sm">
          Available in PDF format
        </p>

      </div>
    </div>
  );
}