import Head from 'next/head'
import Link from 'next/link'

import { Menu } from '@headlessui/react'

export default function DropDown() {
  return (
    <div>
      <Head>
        <title>Menu (Dropdown)</title>
      </Head>

      <main>

        <Link href="/">
          <a className="m-6 text-gray-100">
            Back
          </a>
        </Link>
        <h1 className="m-6 text-gray-100 text-2xl text-center">
          Menu (Dropdown)
        </h1>

        <Menu>
          <Menu.Button className="text-white">Menu Button</Menu.Button>
          <Menu.Items>
            <Menu.Item>
            {({ active }) => (
            <a
              className={`${
                active ? 'bg-pink-600 text-white' : 'bg-white text-black'
              }`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
            </Menu.Item>
          </Menu.Items>

        </Menu>

      </main>

    </div>
  )
}