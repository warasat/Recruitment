import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, UserCheck } from "lucide-react";

export default function RecruitmentHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Recruitment</h1>
        <p className="text-gray-600 mt-2">Manage jobs, candidates, and referrals</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/jobs">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F26522]">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>Jobs</CardTitle>
                  <CardDescription>Manage job postings</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">View and manage all job openings</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/candidates">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F26522]">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>Candidates</CardTitle>
                  <CardDescription>Manage candidates</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">View and manage all candidates</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/referrals">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F26522]">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>Referrals</CardTitle>
                  <CardDescription>Manage referrals</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">View and manage all referrals</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}

