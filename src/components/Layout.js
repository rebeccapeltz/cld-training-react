import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  let activeClassName = "underline";
  let dividerStyle = "bg-blue-500 text-white";

  function styleTitle(isDivider) {
    if (isDivider) return dividerStyle
    else return ""
  }
  const testMenuItems = [
    { href: "/", title: "Introduction" },
    {
      href: "/",
      title: "Upload",
      divider: true,
    },
    {
      href: "/uw",
      title: "Upload Widget✅",
      divider: false,
    },
    {
      href: "/",
      title: "Transform",
      divider: true,
    },
    {
      href: "/url-gen",
      title: "URL Generate✅",
      divider: false,
    },
    {
      href: "",
      title: "Deliver",
      divider: true,
    },
    {
      href: "/advanced-image",
      title: "Advanced Image",
      divider: false,
    },
    {
      href: "/advanced-video",
      title: "Advanced Video",
      divider: false,
    },

    {
      href: "/adding-transformations",
      title: "Adding Transformations✅",
      divider: false,
    },
    {
      href: "",
      title: "Optimization",
      divider: true,
    },
    // {
    //   href: "image",
    //   title: "Generate Image URL",
    // },
    // {
    //   href: "video",
    //   title: "Generate Video URL",
    // },
    {
      href: "resize-scale",
      title: "Resize with Scale✅",
      divider: false,
    },
    {
      href: "resize-crop-gravity",
      title: "Resize with Crop/Gravity✅",
      divider: false,
    },
    {
      href: "pad-with-background",
      title: "Pad with Background❓",
      divider: false,
    },
    {
      href: "quality",
      title: "Quality",
      divider: false,
    },
    {
      href: "format",
      title: "Format",
      divider: false,
    },
    {
      href: "optimize",
      title: "Optimize",
      divider: false,
    },
    {
      href: "",
      title: "Effects and Overlays",
      divider: true,
    },

    {
      href: "effects",
      title: "Effects",
      divider: false,
    },

    {
      href: "overlay-image",
      title: "Overlay Image",
      divider: false,
    },
    {
      href: "overlay-text",
      title: "Overlay Text",
      divider: false,
    },
    {
      href: "overlay-video",
      title: "Overlay Video",
      divider: false,
    },
    {
      href: "video-only",
      title: "Video Only Transformations",
      divider: false,
    },
    {
      href: "",
      title: "Plugins",
      divider: true,
    },
    {
      href: "lazyload",
      title: "Lazyload Plugin✅",
      divider: false,
    },
    {
      href: "placeholder",
      title: "Placeholder Plugin✅",
      divider: false,
    },
    {
      href: "responsive",
      title: "Responsive Plugin✅",
      divider: false,
    },
    {
      href: "accessibility",
      title: "Accessibility Plugin✅",
      divider: false,
    },
  ];

  <li>
    <NavLink to="/">Home</NavLink>
  </li>;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-200 text-black sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
        <h2 className="text-lg">
          {" "}
          Upload, Transform, Deliver with Cloudinary React SDK
        </h2>
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-gray-100 w-full md:w-60">
          <nav>
            <ul>
              {testMenuItems.map(({ href, title, divider }) => (
                <li className="m-1" key={title}>
                  <NavLink
                    to={href}
                    className={({ isActive, href, divider }) =>
                      isActive ? activeClassName : undefined
                    
                    }
                  >
                    <p className={styleTitle(divider)}>{title}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className={"flex-1 mr-2 ml-2"}>
          <Outlet />
        </main>
        {/* <main className='flex-1'>{children}</main> */}
      </div>
    </div>
  );
}
