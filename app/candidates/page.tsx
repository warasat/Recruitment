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
import { Plus, Download, Edit, Trash2, MoreVertical, FileText, Download as DownloadIcon, Mail, Phone, ChevronDown } from "lucide-react";

const candidates = [
  {
    id: "Cand-001",
    name: "Harold Gaynor",
    email: "harold@example.com",
    phone: "(146) 8964 278",
    appliedRole: "Accountant",
    appliedDate: "12 Sep 2024",
    status: "New",
    avatar: "/assets/img/users/user-39.jpg",
  },
  {
    id: "Cand-002",
    name: "Sandra Ornellas",
    email: "sandra@example.com",
    phone: "(148) 9648 218",
    appliedRole: "Accountant",
    appliedDate: "12 Sep 2024",
    status: "Scheduled",
    avatar: "/assets/img/users/user-40.jpg",
  },
  {
    id: "Cand-003",
    name: "John Harris",
    email: "john@example.com",
    phone: "(196) 2348 947",
    appliedRole: "Technician",
    appliedDate: "12 Sep 2024",
    status: "Interviewed",
    avatar: "/assets/img/users/user-41.jpg",
  },
  {
    id: "Cand-004",
    name: "Carole Langan",
    email: "carole@example.com",
    phone: "(138) 6487 295",
    appliedRole: "Web Developer",
    appliedDate: "12 Sep 2024",
    status: "Offered",
    avatar: "/assets/img/users/user-42.jpg",
  },
  {
    id: "Cand-005",
    name: "Charles Marks",
    email: "charles@example.com",
    phone: "(154) 6485 218",
    appliedRole: "SEO",
    appliedDate: "12 Sep 2024",
    status: "Hired",
    avatar: "/assets/img/users/user-44.jpg",
  },
  {
    id: "Cand-006",
    name: "Kerry Drake",
    email: "kerry@example.com",
    phone: "(123) 4567 890",
    appliedRole: "Designer",
    appliedDate: "12 Sep 2024",
    status: "Rejected",
    avatar: "/assets/img/users/user-43.jpg",
  },
  {
    id: "Cand-007",
    name: "David Carmona",
    email: "david@example.com",
    phone: "(179) 7382 829",
    appliedRole: "Account Manager",
    appliedDate: "12 Sep 2024",
    status: "Hired",
    avatar: "/assets/img/users/user-46.jpg",
  },
  {
    id: "Cand-008",
    name: "Margaret Soto",
    email: "margaret@example.com",
    phone: "(184) 2719 738",
    appliedRole: "SEO Analyst",
    appliedDate: "12 Sep 2024",
    status: "Scheduled",
    avatar: "/assets/img/users/user-47.jpg",
  },
  {
    id: "Cand-009",
    name: "Jeffrey Thaler",
    email: "jeffrey@example.com",
    phone: "(184) 2719 738",
    appliedRole: "Admin",
    appliedDate: "12 Sep 2024",
    status: "New",
    avatar: "/assets/img/users/user-48.jpg",
  },
  {
    id: "Cand-010",
    name: "Joyce Golston",
    email: "joyce@example.com",
    phone: "(184) 2719 738",
    appliedRole: "Business Analyst",
    appliedDate: "12 Sep 2024",
    status: "Hired",
    avatar: "/assets/img/users/user-49.jpg",
  },
  {
    id: "Cand-011",
    name: "Cedric Rosalez",
    email: "cedric@example.com",
    phone: "(184) 2719 738",
    appliedRole: "Financial Analyst",
    appliedDate: "12 Sep 2024",
    status: "New",
    avatar: "/assets/img/users/user-50.jpg",
  },
  {
    id: "Cand-012",
    name: "Lillie Diaz",
    email: "lillie@example.com",
    phone: "(184) 2719 738",
    appliedRole: "Receptionist",
    appliedDate: "12 Sep 2024",
    status: "Rejected",
    avatar: "/assets/img/users/user-51.jpg",
  },
];

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "New":
      return "bg-purple text-white";
    case "Scheduled":
      return "bg-pink text-white";
    case "Interviewed":
      return "bg-blue-500 text-white";
    case "Offered":
      return "bg-warning text-white";
    case "Hired":
      return "bg-success text-white";
    case "Rejected":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export default function CandidatesPage() {
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [isAddCandidateOpen, setIsAddCandidateOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCandidates(candidates.map((candidate) => candidate.id));
    } else {
      setSelectedCandidates([]);
    }
  };

  const toggleSelectCandidate = (id: string) => {
    setSelectedCandidates((prev) =>
      prev.includes(id)
        ? prev.filter((candidateId) => candidateId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <Breadcrumb
        title="Candidates"
        items={[
          { label: "Recruitment" },
          { label: "Candidates", href: undefined },
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
            <Dialog open={isAddCandidateOpen} onOpenChange={setIsAddCandidateOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#F26522] hover:bg-[#FE9F43] text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Candidate
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Candidate</DialogTitle>
                </DialogHeader>
                <form>
                  <div className="space-y-4 pb-0">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>
                          Candidate Name <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Enter candidate name" />
                      </div>
                      <div>
                        <Label>
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input type="email" placeholder="Enter email" />
                      </div>
                      <div>
                        <Label>
                          Phone <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Enter phone number" />
                      </div>
                      <div>
                        <Label>
                          Applied Role <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="accountant">Accountant</SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="technician">Technician</SelectItem>
                            <SelectItem value="web-developer">Web Developer</SelectItem>
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
                            <SelectItem value="sent">Sent</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                            <SelectItem value="interviewed">Interviewed</SelectItem>
                            <SelectItem value="offered">Offered</SelectItem>
                            <SelectItem value="hired">Hired</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="mt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsAddCandidateOpen(false)}
                      className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-[#F26522] hover:bg-[#FE9F43] text-white">
                      Add Candidate
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
            <CardTitle>Candidates Grid</CardTitle>
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
                  <DropdownMenuItem>Accountant</DropdownMenuItem>
                  <DropdownMenuItem>App Developer</DropdownMenuItem>
                  <DropdownMenuItem>Technician</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Status Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]">
                    Select Status
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Select Status</DropdownMenuItem>
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
        {candidates.map((candidate) => (
          <Card key={candidate.id}>
            <CardContent className="p-4">
              {/* Header with Avatar, Name, Email, and ID Badge */}
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center flex-shrink-0 flex-1 min-w-0">
                  <Link
                    href={`/candidates/${candidate.id}`}
                    className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full mr-2 flex-shrink-0"
                  >
                    <Image
                      src={candidate.avatar}
                      alt={candidate.name}
                      width={48}
                      height={48}
                      className="h-full w-full rounded-full object-cover"
                      unoptimized
                    />
                  </Link>
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1 mb-1">
                      <h6 className="text-base font-semibold">
                        <Link
                          href={`/candidates/${candidate.id}`}
                          className="hover:text-[#FE9F43]"
                        >
                          {candidate.name}
                        </Link>
                      </h6>
                      <Badge className="bg-[rgba(254,159,67,0.1)] text-[#FE9F43] border-0 text-xs px-1.5 py-0">
                        {candidate.id}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{candidate.email}</p>
                  </div>
                </div>
              </div>

              {/* Light Gray Background Section with Applied Role, Date, and Status */}
              <div className="bg-gray-50 rounded p-2">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="text-sm text-gray-500 font-normal">Applied Role</h6>
                  <span className="text-sm text-gray-900 font-medium">{candidate.appliedRole}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h6 className="text-sm text-gray-500 font-normal">Applied Date</h6>
                  <span className="text-sm text-gray-900 font-medium">{candidate.appliedDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h6 className="text-sm text-gray-500 font-normal">Status</h6>
                  <Badge className={`${getStatusBadgeVariant(candidate.status)} text-xs px-2 py-0.5 border-0`}>
                    <span className="mr-1">●</span>
                    {candidate.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

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


