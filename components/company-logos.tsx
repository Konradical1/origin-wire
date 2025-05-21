"use client"

import Image from "next/image"

const logoFiles = [
  "Pathmassge.png",
  "Jandj.png",
  "Buzzwash.png",
  "IEC.png",
  "PrecisionDetailing.png",
  "GH.png",
]

const CompanyLogos = () => {
  return (
    <div className="w-full overflow-hidden bg-muted/50 py-8">
      <div className="relative w-full">
        <div
          className="flex animate-scroll items-center gap-8"
          style={{ width: 'max-content' }}
        >
          {logoFiles.concat(logoFiles).map((file, idx) => (
            <div key={idx} className="flex-shrink-0">
              <Image
                src={`/images/${file}`}
                alt={`Company logo ${idx % logoFiles.length + 1}`}
                width={200}
                height={100}
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyLogos 