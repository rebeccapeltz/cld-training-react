import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  let activeClassName = "text-cldcoral";
  let dividerStyle = "font-sans font-bold bg-clddarkblue text-white pl-1";
  let titleStyle = "font-sans text-sm font-semibold bg-cldgray text-black pl-4";

  function styleTitle(isDivider) {
    if (isDivider) return dividerStyle;
    else return titleStyle;
  }
  const testMenuItems = [
    {
      href: "/",
      title: "Upload",
      divider: true,
    },
    {
      href: "/",
      title: "Upload Widget",
      divider: false,
    },
    {
      href: "/url-gen",
      title: "Transform",
      divider: true,
    },
    {
      href: "/url-gen",
      title: "URL Generate",
      divider: false,
    },
    {
      href: "/advanced-image",
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
      title: "Adding Transformations",
      divider: false,
    },
    {
      href: "/resize-scale",
      title: "Optimization",
      divider: true,
    },
    {
      href: "resize-scale",
      title: "Resize with Scale",
      divider: false,
    },
    {
      href: "resize-crop-gravity",
      title: "Resize with Crop/Gravity",
      divider: false,
    },
    {
      href: "pad-with-background",
      title: "Pad with Background",
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
      href: "/effects",
      title: "Effects",
      divider: true,
    },
    {
      href: "/effects",
      title: "Using Effects",
      divider: false,
    },
    {
      href: "/overlay-image",
      title: "Overlays",
      divider: true,
    },
    {
      href: "/overlay-image",
      title: "Overlay with Image",
      divider: false,
    },
    {
      href: "/overlay-text",
      title: "Overlay with Text",
      divider: false,
    },
    {
      href: "/image-only",
      title: "Asset Specific",
      divider: true,
    },
    {
      href: "image-only",
      title: "Image Only Transformations",
      divider: false,
    },
    {
      href: "/video-only",
      title: "Video Only Transformations",
      divider: false,
    },
    {
      href: "/lazyload",
      title: "Plugins",
      divider: true,
    },
    {
      href: "/lazyload",
      title: "Lazyload Plugin",
      divider: false,
    },
    {
      href: "/placeholder",
      title: "Placeholder Plugin",
      divider: false,
    },
    {
      href: "/responsive",
      title: "Responsive Plugin",
      divider: false,
    },
    {
      href: "/accessibility",
      title: "Accessibility Plugin",
      divider: false,
    },
  ];

  return (
    <div className="bg-cldgray min-h-screen flex flex-col">
      <header className="bg-cldgray sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
        <div className="text-lg font-sans text-clddarkblue">
          {" "}
          Upload, Transform, Deliver with Cloudinary React SDK
        </div>
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className={"bg-cldgray text-clddarkblue w-full md:w-60"}>
          <nav>
            <ul>
              {testMenuItems.map(({ href, title, divider }) => (
                <li className="m-.8" key={title}>
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
      </div>
      <footer className="footer bg-cldgray items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col ">
          <p>© 2023  Cloudinary Customer Education</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/rebeccapeltz/cld-training-react">
           <img title="Source code for this application" target="_blank"  height="24px" width="24px" src="/images/github-icon.png" alt="Cloudinary Community"/>
          </a>
          <a href="https://discord.com/invite/Cloudinary">
           <img title="Cloudinary Discord" target="_blank"  height="24px" width="24px" src="/images/discord-icon.png" alt="Cloudinary Community"/>
          </a>
          <a href="https://community.cloudinary.com">
           <img title="Cloudinary Community Forum" target="_blank"  height="30px" width="30px" src="/images/cloudinary_cloud_glyph_white_png.png" alt="Cloudinary Community"/>
          </a>
        </div>
      </footer>
    </div>
  );
}
