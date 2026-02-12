
export interface TeamScore {
  name: string;
  total: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  ot?: number;
}

export interface MatchData {
  id: string;
  date: string;
  league: string;
  teamA: TeamScore;
  teamB: TeamScore;
  isValidated: boolean;
  validationError?: string;
}

export interface ScraperResult {
  url: string;
  teamAName: string;
  teamBName: string;
  teamAMatches: MatchData[];
  teamBMatches: MatchData[];
}

export interface MatchStats {
  matchId: string;
  date: string;
  teams: string;
  h1Total: number;
  h2Total: number;
  ftTotal: number;
}

export interface TeamAverages {
  teamName: string;
  avgQ1: number;
  avgQ2: number;
  avgQ3: number;
  avgQ4: number;
  avgH1: number;
  avgH2: number;
  avgFT: number;
}

export interface UnifiedAverages {
  avgH1: number;
  avgH2: number;
  avgFT: number;
}

export interface AnalyticsResult {
  url: string;
  matchBreakdown: MatchStats[];
  unified: UnifiedAverages;
  teamA: TeamAverages;
  teamB: TeamAverages;
  insights: {
    highestScoringQuarter: string;
    strongestHalf: string;
    teamAStrongestQuarter: string;
    teamBStrongestQuarter: string;
    verdict: string;
  };
}

export type JobStatus = 'idle' | 'pending' | 'scraping' | 'processing' | 'done' | 'error';

export interface ScrapeJob {
  id: string;
  url: string;
  status: JobStatus;
  result?: AnalyticsResult;
  error?: string;
}
