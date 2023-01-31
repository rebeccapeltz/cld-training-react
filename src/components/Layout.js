import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {

    const testMenuItems = [
        {
            href: '/',
            title: 'Generate Image URL',
        },
        {
            href: 'video',
            title: 'Generate Video URL',
        },
        {
            href: 'resize-scale',
            title: 'Resize with Scale',
        },
        {
            href: 'resize-crop-gravity',
            title: 'Resize with Crop/Gravity',
        },
        {
            href: 'quality',
            title: 'Quality (Compression)',
        },
        {
            href: 'format',
            title: 'Format',
        },
        {
            href: 'optimization',
            title: 'Optimization',
        },
         {
            href: 'aesthetics',
            title: 'Aesthic Transformations',
        },
        {
            href: 'background',
            title: 'Background',
        },
        {
            href: 'overlay-image',
            title: 'Overlay Image',
        },
        {
            href: 'overlay-text',
            title: 'Overlay Text',
        },
        {
            href: 'overlay-video',
            title: 'Overlay Video',
        },
        {
            href: 'video-only',
            title: 'Video Only',
        },
        {
            href: 'lazyload',
            title: 'Lazyload Plugin',
        },
        {
            href: 'placeholder',
            title: 'Placeholder Plugin',
        },
        {
            href: 'responsive',
            title: 'Responsive Plugin',
        },
        {
            href: 'accessibility',
            title: 'Accessibility Plugin',
        }
    ];
    // const menuItems = [
    //   {
    //     href: '/',
    //     title: 'Introduction',
    //   },
    //   {
    //     href: '/animated',
    //     title: 'Animated',
    //   },
    //   {
    //     href: '/about',
    //     title: 'Border',
    //   },
    //   {
    //     href: '/contact',
    //     title: 'Delivery',
    //   },
    //   {
    //     href: '/effect',
    //     title: 'Effect',
    //   },
    //   {
    //     href: '/namedtransformation',
    //     title: 'Named Transformation',
    //   },
    //   {
    //     href: '/overlay',
    //     title: 'Overlay',
    //   },
    //   {
    //     href: '/psdtools',
    //     title: 'PSDTools',
    //   },
    //   {
    //     href: '/resize',
    //     title: 'Resize',
    //   },
    //   {
    //     href: '/roundcorners',
    //     title: 'RoundCorners',
    //   },
    //   {
    //     href: '/reshape',
    //     title: 'Reshape',
    //   },
    //   {
    //     href: '/videoedit',
    //     title: 'VideoEdit',
    //   },
    // ];

    <li><NavLink to="/">Home</NavLink></li>


    return (
        <div className='min-h-screen flex flex-col'>
            <header className='bg-gray-200 text-black sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
            Cloudinary URL Generator

            </header>
            <div className='flex flex-col md:flex-row flex-1'>
                <aside className='bg-gray-100 w-full md:w-60'>
                    <nav>
                        <ul>
                            {testMenuItems.map(({ href, title }) => (
                                <li className='m-1' key={title}>
                                    <NavLink to={href} >
                                        <p className={'text-black'}>{title}</p>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className={'flex-1'}>
                    <Outlet />
                </main>
                {/* <main className='flex-1'>{children}</main> */}
            </div>
        </div>
    );
}