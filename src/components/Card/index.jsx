import { Link } from "react-router-dom"
import clsx from "clsx"

const Card = ({
  title,
  icon,
  to = "#",
  className = "",
  bgClass = "bg-white",
  textClass = "text-grayDark",
  borderClass = "border-gray-200",
  darkBgClass = "dark:bg-black",
  darkTextClass = "dark:text-white",
  darkBorderClass = "dark:border-gray-700",
  imageSrc,
  imageAlt = "Card Image",
  imagePosition = "full", // "full", "left", "right"
}) => {
  return (
    <Link
      to={to}
      className={clsx(
        "group block transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-xl shadow-lg border overflow-hidden h-full min-h-[200px] md:min-h-[250px]",
        bgClass,
        textClass,
        borderClass,
        darkBgClass,
        darkTextClass,
        darkBorderClass,
        className,
      )}
    >
      <div className="relative h-full w-full flex">
        {imagePosition === "left" && (
          <div className="relative h-full w-1/2">
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        <div
          className={clsx(
            "flex items-center p-4",
            imagePosition === "full"
              ? "w-full"
              : imagePosition === "left" || imagePosition === "right"
                ? "w-1/2"
                : "w-full",
          )}
        >
          <div>
            {icon && <div className="mb-2 text-4xl">{icon}</div>}
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </div>

        {imagePosition === "right" && (
          <div className="relative h-full w-1/2">
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {imagePosition === "full" && (
          <div className="absolute inset-0">
            <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-2xl font-bold text-white">{title}</h2>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

export default Card
