"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useAuth } from "../context/useAuth";
import Link from "next/link";
import { ContextType } from "../types/ContextType";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ navigation }: any) {
  const { user, logout, isAuthenticated }: ContextType = useAuth()!;
  return (
    <Disclosure
      as="nav"
      className="dark:bg-gray-800 bg-white shadow-lg shadow-gray-300 dark:shadow-gray-700"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:dark:bg-gray-700 hover:bg-gray-200 hover:text-white focus:outline-none">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <i className="far fa-bars block size-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://cdn-icons-png.flaticon.com/512/5863/5863203.png"
                className="h-8 w-8"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {isAuthenticated ? (
                  navigation.map((item: any) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "dark:bg-gray-900 dark:text-white bg-gray-200 text-gray-900"
                          : "dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white text-gray-800 hover:bg-gray-200 hover:text-gray-900",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))
                ) : (
                  <>
                    <Link
                      href="/"
                      className="dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white text-gray-800 hover:bg-gray-200 hover:text-gray-900rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {isAuthenticated ? (
              <>
                <button
                  type="button"
                  className="relative rounded-full dark:bg-gray-800 bg-white p-1 text-gray-400 hover:text-white focus:outline-none"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <i aria-hidden="true" className="size-6 far fa-bell" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full dark:bg-gray-800 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/7084/7084424.png"
                        className="w-8 h-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        {user?.name}
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href="#"
                        onClick={logout}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        Sign out
                      </Link>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </>
            ) : (
              <Link
                href="/login"
                className="text-gray-300 bg-blue-500 hover:bg-blue-600 hover:scale-105 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {isAuthenticated ? (
            navigation.map((item: any) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "dark:bg-gray-900 dark:text-white text-black bg-gray-200"
                    : "dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white text-gray-800 hover:bg-gray-200",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Link>
            ))
          ) : (
            <Link
              href="/"
              className="dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white text-gray-800 hover:bg-gray-200 block rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
