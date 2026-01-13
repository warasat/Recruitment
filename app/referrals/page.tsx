"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Plus, Download, Edit, Trash2, FileText, FileSpreadsheet, Calendar } from "lucide-react";

const referrals = [
  {
    id: "Reff-001",
    referrerName: "Anthony Lewis",
    referrerDepartment: "Finance",
    referrerAvatar: "/assets/img/users/user-32.jpg",
    jobTitle: "Senior IOS Developer",
    jobLogo: "/assets/img/icons/apple.svg",
    refereeName: "Harold Gaynor",
    refereeEmail: "harold@example.com",
    refereeAvatar: "/assets/img/users/user-11.jpg",
    bonus: "$200",
  },
  {
    id: "Reff-002",
    referrerName: "Brian Villalobos",
    referrerDepartment: "Developer",
    referrerAvatar: "/assets/img/users/user-09.jpg",
    jobTitle: "Junior PHP Developer",
    jobLogo: "/assets/img/icons/php.svg",
    refereeName: "Sandra Ornellas",
    refereeEmail: "sandra@example.com",
    refereeAvatar: "/assets/img/users/user-29.jpg",
    bonus: "$100",
  },
  {
    id: "Reff-003",
    referrerName: "Harvey Smith",
    referrerDepartment: "Developer",
    referrerAvatar: "/assets/img/users/user-01.jpg",
    jobTitle: "Network Engineer",
    jobLogo: "/assets/img/icons/black.svg",
    refereeName: "John Harris",
    refereeEmail: "john@example.com",
    refereeAvatar: "/assets/img/users/user-16.jpg",
    bonus: "$300",
  },
  {
    id: "Reff-004",
    referrerName: "Stephan Peralt",
    referrerDepartment: "Finance",
    referrerAvatar: "/assets/img/users/user-33.jpg",
    jobTitle: "UI/UX Designer",
    jobLogo: "/assets/img/icons/figma.svg",
    refereeName: "Carole Langan",
    refereeEmail: "carole@example.com",
    refereeAvatar: "/assets/img/users/user-26.jpg",
    bonus: "$250",
  },
  {
    id: "Reff-005",
    referrerName: "Doglas Martini",
    referrerDepartment: "Marketing",
    referrerAvatar: "/assets/img/users/user-34.jpg",
    jobTitle: "Marketing Manager",
    jobLogo: "/assets/img/icons/marketing.svg",
    refereeName: "Charles Marks",
    refereeEmail: "charles@example.com",
    refereeAvatar: "/assets/img/users/user-39.jpg",
    bonus: "$150",
  },
];

export default function ReferralsPage() {
  const [selectedReferrals, setSelectedReferrals] = useState<string[]>([]);
  const [isAddReferralOpen, setIsAddReferralOpen] = useState(false);
  const [isEditReferralOpen, setIsEditReferralOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedReferrals(referrals.map((referral) => referral.id));
    } else {
      setSelectedReferrals([]);
    }
  };

  const toggleSelectReferral = (id: string) => {
    setSelectedReferrals((prev) =>
      prev.includes(id)
        ? prev.filter((referralId) => referralId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <Breadcrumb
        title="Referrals"
        items={[
          { label: "Recruitment" },
          { label: "Referrals", href: undefined },
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
                <DropdownMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
                  Export as PDF
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileSpreadsheet className="mr-2 h-4 w-4" />
                  Export as Excel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={isAddReferralOpen} onOpenChange={setIsAddReferralOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#F26522] hover:bg-[#FE9F43] text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Referral
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Referral</DialogTitle>
                </DialogHeader>
                <form>
                  <div className="space-y-4 pb-0">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>
                          Referrer Name <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Enter referrer name" />
                      </div>
                      <div>
                        <Label>
                          Job Referred <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select job" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ios-developer">Senior IOS Developer</SelectItem>
                            <SelectItem value="php-developer">Junior PHP Developer</SelectItem>
                            <SelectItem value="network-engineer">Network Engineer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>
                          Referee Name <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Enter referee name" />
                      </div>
                      <div>
                        <Label>
                          Referral Bonus <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Enter bonus amount" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="mt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsAddReferralOpen(false)}
                      className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-[#F26522] hover:bg-[#FE9F43] text-white">
                      Add Referral
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
            <CardTitle>Referrals List</CardTitle>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="dd/mm/yyyy - dd/mm/yyyy"
                  className="w-64 pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
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
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={
                        selectedReferrals.length === referrals.length &&
                        referrals.length > 0
                      }
                      onCheckedChange={toggleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Refferals ID</TableHead>
                  <TableHead>Referrer Name</TableHead>
                  <TableHead>Job Reffered</TableHead>
                  <TableHead>Referee Name</TableHead>
                  <TableHead>Refferals Bonus</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referrals.map((referral) => (
                  <TableRow key={referral.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedReferrals.includes(referral.id)}
                        onCheckedChange={() => toggleSelectReferral(referral.id)}
                      />
                    </TableCell>
                    <TableCell>{referral.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                          <Image
                            src={referral.referrerAvatar}
                            alt={referral.referrerName}
                            width={40}
                            height={40}
                            className="h-full w-full rounded-full object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <Link
                            href={`/referrals/${referral.id}`}
                            className="font-medium text-sm hover:underline"
                          >
                            {referral.referrerName}
                          </Link>
                          <p className="text-xs text-gray-500">{referral.referrerDepartment}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-gray-50 overflow-hidden">
                          <Image
                            src={referral.jobLogo}
                            alt={referral.jobTitle}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                            unoptimized
                          />
                        </div>
                        <Link
                          href={`/jobs/${referral.id}`}
                          className="font-medium text-sm hover:underline"
                        >
                          {referral.jobTitle}
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                          <Image
                            src={referral.refereeAvatar}
                            alt={referral.refereeName}
                            width={40}
                            height={40}
                            className="h-full w-full rounded-full object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <Link
                            href={`/candidates/${referral.id}`}
                            className="font-medium text-sm hover:underline"
                          >
                            {referral.refereeName}
                          </Link>
                          <p className="text-xs text-gray-500">{referral.refereeEmail}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold">{referral.bonus}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Dialog open={isEditReferralOpen} onOpenChange={setIsEditReferralOpen}>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43]">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Edit Referral</DialogTitle>
                            </DialogHeader>
                            <form>
                              <div className="space-y-4 pb-0">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label>
                                      Referrer Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input placeholder="Enter referrer name" />
                                  </div>
                                  <div>
                                    <Label>
                                      Referral Bonus <span className="text-red-500">*</span>
                                    </Label>
                                    <Input placeholder="Enter bonus amount" />
                                  </div>
                                </div>
                              </div>
                              <DialogFooter className="mt-4">
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => setIsEditReferralOpen(false)}
                                  className="hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43] hover:border-[#FE9F43]"
                                >
                                  Cancel
                                </Button>
                                <Button type="submit" className="bg-[#F26522] hover:bg-[#FE9F43] text-white">
                                  Update Referral
                                </Button>
                              </DialogFooter>
                            </form>
                          </DialogContent>
                        </Dialog>
                        <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43]">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
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
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

