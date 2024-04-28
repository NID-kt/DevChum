type ContributionDay = {
  contributionCount: number;
  date: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: Week[];
};

type User = {
  contributionsCollection: {
    hasActivityInThePast: boolean;
    restrictedContributionsCount: number;
    startedAt: string;
    endedAt: string;
    repositoryContributions: {
      totalCount: number;
    };
    totalCommitContributions: number;
    totalIssueContributions: number;
    totalPullRequestContributions: number;
    totalPullRequestReviewContributions: number;
    totalRepositoriesWithContributedCommits: number;
    totalRepositoriesWithContributedIssues: number;
    totalRepositoriesWithContributedPullRequestReviews: number;
    totalRepositoriesWithContributedPullRequests: number;
    totalRepositoryContributions: number;
    latestRestrictedContributionDate: string;
    contributionCalendar: ContributionCalendar;
  };
};

export type MockData = {
  user: User;
};
