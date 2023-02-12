import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const testMenuItems = [
    { href: "/", title: "Introduction" },
    {
        href: "/uw",
        title: "Upload Widget",
      },
    {
        href: "/cloudinary-package",
        title: "Cloudinary Package",
      },
      {
        href: "/url-gen-package",
        title: "URL Generate Package",
      },
      {
        href: "/advanced-image",
        title: "Advanced Image",
      },
      {
        href: "/advanced-video",
        title: "Advanced Video",
      },
    { href: "/transformation-builder", title: "Transformation Builder✅" },
    {
      href: "image",
      title: "Generate Image URL",
    },
    {
      href: "video",
      title: "Generate Video URL",
    },
    {
      href: "resize-scale",
      title: "Resize with Scale✅",
    },
    {
      href: "resize-crop-gravity",
      title: "Resize with Crop/Gravity✅",
    },
    {
      href: "pad-background",
      title: "Pad with Background",
    },
    {
      href: "quality",
      title: "Quality",
    },
    {
      href: "format",
      title: "Format",
    },
    {
      href: "optimize",
      title: "Optimize",
    },
    {
      href: "effects",
      title: "Effects",
    },
   
    {
      href: "overlay-image",
      title: "Overlay Image",
    },
    {
      href: "overlay-text",
      title: "Overlay Text",
    },
    {
      href: "overlay-video",
      title: "Overlay Video",
    },
    {
      href: "video-only",
      title: "Video Only",
    },
    {
      href: "lazyload",
      title: "Lazyload Plugin✅",
    },
    {
      href: "placeholder",
      title: "Placeholder Plugin✅",
    },
    {
      href: "responsive",
      title: "Responsive Plugin✅",
    },
    {
      href: "accessibility",
      title: "Accessibility Plugin✅",
    },
  ];
  
  <li>
    <NavLink to="/">Home</NavLink>
  </li>;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-200 text-black sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
      <h2 className="text-lg"> Upload, Transform, Deliver with Cloudinary React SDK</h2>
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-gray-100 w-full md:w-60">
          <nav>
            <ul>
              {testMenuItems.map(({ href, title }) => (
                <li className="m-1" key={title}>
                  <NavLink to={href}>
                    <p className={"text-black"}>{title}</p>
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
