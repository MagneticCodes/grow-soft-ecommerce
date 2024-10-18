import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { RiMenu2Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(({ title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <FaChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

// for Home Sub Menu:
function HomeSubMenu() {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);

  const homeMenuItems = [
    { title: "Home One", href: "/" },
    { title: "Home Two", href: "/home-two" },
    { title: "Home Three", href: "/home-three" },
  ];

  const renderHomeItems = homeMenuItems.map(({ title, href }, key) => (
    <Link to={href} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <Typography
          variant="small"
          className="flex items-center text-sm font-medium"
        >
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <Menu
      open={isHomeMenuOpen}
      handler={setIsHomeMenuOpen}
      placement="bottom"
      offset={{ mainAxis: 10 }}
      allowHover={true}
    >
      <MenuHandler>
        <ListItem
          className="flex items-center  gap-2 py-2 pr-4 text-[14px] -mt-1 font-medium text-gray-900"
          onClick={() => setIsHomeMenuOpen((cur) => !cur)}
        >
          Homepage
          <FaChevronDown
            className={`transition-transform size-[12px] ${
              isHomeMenuOpen ? "rotate-180" : ""
            }`}
          />
        </ListItem>
      </MenuHandler>
      <MenuList className="hidden max-w-screen-sm rounded-xl mt-2 lg:block">
        <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
          {renderHomeItems}
        </ul>
      </MenuList>
    </Menu>
  );
}
// -------------------

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <HomeSubMenu />
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Shop</ListItem>
      </Typography>
      <Typography
        as={Link}
        to="/blogs"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Blog</ListItem>
      </Typography>
      <Link to={"/about"}>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            About
          </ListItem>
        </Typography>
      </Link>
      <Link to="/contact">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Contact
          </ListItem>
        </Typography>
      </Link>
    </List>
  );
}

function BottomNavBar({ themeColor }) {
  const [openNav, setOpenNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div
      className="relative bg-[#FFBB38] h-[60px] z-50"
      style={{ background: themeColor ? themeColor : "" }}
    >
      <Navbar className="container bg-transparent border-none shadow-none h-full relative z-50">
        <div className="flex items-center justify-between text-blue-gray-900 relative z-50">
          <div className="relative inline-block text-left dropdown -ms-6">
            <div
              className="inline-flex py-4 -mt-2 items-center justify-around w-[270px] h-[53px] text-sm font-medium bg-white rounded-se-lg rounded-ss-lg focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex gap-3 items-center">
                <RiMenu2Line className="" />
                <h2 className="font-serif">All Categories</h2>
              </div>
              <div className="flex">
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 z-50 w-full mt-0 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-b-md shadow-lg">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:block -mt-4">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex w-[161px] -mt-4 -me-4">
            <Button
              className="capitalize text-sm font-[600] rounded-none bg-black"
              variant="gradient"
              size=""
            >
              Become a Seller
            </Button>
          </div>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Log In
            </Button>
            <Button variant="gradient" size="sm" fullWidth>
              Sign In
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default BottomNavBar;
