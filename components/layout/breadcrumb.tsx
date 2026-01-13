"use client";

import React from "react";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  title?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export function Breadcrumb({ items, title, actions, children }: BreadcrumbProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        {title && <h2 className="mb-2 text-2xl font-semibold">{title}</h2>}
        {children}
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="flex items-center text-gray-500 hover:text-gray-700"
          >
            <Home className="h-4 w-4" />
          </Link>
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

