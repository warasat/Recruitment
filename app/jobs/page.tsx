"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Plus, Download, Edit, Trash2, MoreVertical, MapPin, DollarSign, Briefcase, ChevronDown } from "lucide-react";

const jobs = [
  {
    id: "1",
    title: "Senior IOS Developer",
    location: "New York, USA",
    salary: "30, 000 - 35, 000 / month",
    experience: "2 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/apple.svg",
  },
  {
    id: "2",
    title: "Junior PHP Developer",
    location: "Los Angeles, USA",
    salary: "20, 000 - 25, 000 / month",
    experience: "4 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/php.svg",
  },
  {
    id: "3",
    title: "Network Engineer",
    location: "Bristol, UK",
    salary: "30, 000 - 35, 000 / month",
    experience: "1 year of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/black.svg",
  },
  {
    id: "4",
    title: "React Developer",
    location: "Birmingham, UK",
    salary: "28, 000 - 32, 000 / month",
    experience: "3 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/react.svg",
  },
  {
    id: "5",
    title: "Laravel Developer",
    location: "Washington, USA",
    salary: "32, 000 - 36, 000 / month",
    experience: "1 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/laravel.svg",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    location: "Coventry, UK",
    salary: "25, 000 - 35, 000 / month",
    experience: "6 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/devops.svg",
  },
  {
    id: "7",
    title: "Android Developer",
    location: "Chicago, USA",
    salary: "28, 000 - 32, 000 / month",
    experience: "5 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/android.svg",
  },
  {
    id: "8",
    title: "HTML Developer",
    location: "Carlisle, UK",
    salary: "25, 000 - 28, 000 / month",
    experience: "3 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/html.svg",
  },
  {
    id: "9",
    title: "UI/UX Designer",
    location: "UI/UX Designer",
    salary: "20, 000 - 25, 000 / month",
    experience: "4 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/figma.svg",
  },
  {
    id: "10",
    title: "Senior IOS Developer",
    location: "San Diego, USA",
    salary: "22, 000 - 28, 000 / month",
    experience: "3 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/apple.svg",
  },
  {
    id: "11",
    title: "Angular Developer",
    location: "Sheffield, UK",
    salary: "28, 000 - 30, 000 / month",
    experience: "2 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/angular.svg",
  },
  {
    id: "12",
    title: "Node js Developer",
    location: "Boston, USA",
    salary: "25, 000 - 28, 000 / month",
    experience: "3 years of experience",
    jobType: "Full Time",
    level: "Expert",
    applicants: 25,
    filled: 10,
    total: 25,
    icon: "/assets/img/icons/nodejs.svg",
  },
];

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Open":
      return "border border-purple-500 text-purple-600 bg-transparent";
    case "Closed":
      return "border border-red-500 text-red-600 bg-transparent";
    case "Cancelled":
      return "border border-gray-500 text-gray-600 bg-transparent";
    default:
      return "border border-gray-500 text-gray-600 bg-transparent";
  }
};

export default function JobsPage() {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [isAddJobOpen, setIsAddJobOpen] = useState(false);
  const [isEditJobOpen, setIsEditJobOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedJobs(jobs.map((job) => job.id));
    } else {
      setSelectedJobs([]);
    }
  };

  const toggleSelectJob = (id: string) => {
    setSelectedJobs((prev) =>
      prev.includes(id)
        ? prev.filter((jobId) => jobId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <Breadcrumb
        title="Jobs"
        items={[
          { label: "Recruitment" },
          { label: "Jobs", href: undefined },
        ]}
        actions={
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                <DropdownMenuItem>Export as Excel</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={isAddJobOpen} onOpenChange={setIsAddJobOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#F26522] hover:bg-[#FE9F43] text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Job
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Job</DialogTitle>
                </DialogHeader>
                <form>
                  <div className="space-y-4 pb-0">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>
                          Job Title <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Enter job title" />
                      </div>
                      <div>
                        <Label>
                          Department <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="it">IT</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>
                          Start Date <span className="text-red-500">*</span>
                        </Label>
                        <Input type="date" />
                      </div>
                      <div>
                        <Label>
                          Expire Date <span className="text-red-500">*</span>
                        </Label>
                        <Input type="date" />
                      </div>
                      <div>
                        <Label>
                          Job Type <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select job type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full Time</SelectItem>
                            <SelectItem value="part-time">Part Time</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>
                          Status <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="open">Open</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="mt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsAddJobOpen(false)}
                      className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-[#F26522] hover:bg-[#FE9F43] text-white">
                      Add Job
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </>
        }
      />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <CardTitle>Job Grid</CardTitle>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Calendar/Date Range */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="dd/mm/yyyy - dd/mm/yyyy"
                  className="pr-10 w-[200px]"
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Role Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]">
                    Role
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Senior IOS Developer</DropdownMenuItem>
                  <DropdownMenuItem>Junior PHP Developer</DropdownMenuItem>
                  <DropdownMenuItem>Network Engineer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Status Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]">
                    Status
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Active</DropdownMenuItem>
                  <DropdownMenuItem>Inactive</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Sort By */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]">
                    Sort By : Last 7 Days
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Recently Added</DropdownMenuItem>
                  <DropdownMenuItem>Ascending</DropdownMenuItem>
                  <DropdownMenuItem>Descending</DropdownMenuItem>
                  <DropdownMenuItem>Last Month</DropdownMenuItem>
                  <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs.map((job) => {
              const progressPercentage = (job.filled / job.total) * 100;
              return (
                <Card key={job.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header with Icon and Title */}
                    <div className="bg-gray-50 p-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                          <Image
                            src={job.icon}
                            alt={job.title}
                            width={48}
                            height={48}
                            className="w-auto h-auto object-contain"
                            unoptimized
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h6 className="font-semibold text-sm mb-0.5 truncate">
                            <Link href={`/jobs/${job.id}`} className="hover:text-[#FE9F43]">
                              {job.title}
                            </Link>
                          </h6>
                          <p className="text-xs text-gray-500">{job.applicants} Applicants</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Job Details */}
                    <div className="p-4">
                      <div className="flex flex-col gap-2 mb-3">
                        <p className="text-sm text-gray-700 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          {job.location}
                        </p>
                        <p className="text-sm text-gray-700 flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-gray-400" />
                          {job.salary}
                        </p>
                        <p className="text-sm text-gray-700 flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-gray-400" />
                          {job.experience}
                        </p>
                      </div>
                      
                      {/* Badges */}
                      <div className="mb-3 flex items-center gap-2 flex-wrap">
                        <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200 border-0 px-2 py-0.5 text-xs font-medium">
                          {job.jobType}
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-0 px-2 py-0.5 text-xs font-medium">
                          {job.level}
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mb-2">
                        <Progress value={progressPercentage} />
                      </div>
                      <p className="text-xs text-gray-500">{job.filled} of {job.total} filled</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

      <Dialog open={isEditJobOpen} onOpenChange={setIsEditJobOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Job</DialogTitle>
          </DialogHeader>
          <form>
            <div className="space-y-4 pb-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>
                    Job Title <span className="text-red-500">*</span>
                  </Label>
                  <Input placeholder="Enter job title" />
                </div>
                <div>
                  <Label>
                    Department <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditJobOpen(false)}
                className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]"
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-[#F26522] hover:bg-[#FE9F43] text-white">
                Update Job
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-3">
                <Trash2 className="h-8 w-8 text-red-600" />
              </div>
              <DialogTitle>Confirm Delete</DialogTitle>
              <p className="mt-2 text-sm text-gray-500">
                You want to delete all the marked items, this cant be undone once you delete.
              </p>
            </div>
          </DialogHeader>
          <DialogFooter className="flex justify-center">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
              className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

