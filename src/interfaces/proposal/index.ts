import { ContractInterface } from 'interfaces/contract';
import { JobInterface } from 'interfaces/job';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProposalInterface {
  id?: string;
  cover_letter: string;
  rate?: number;
  hours_per_week?: number;
  job_id: string;
  freelancer_id: string;
  created_at?: any;
  updated_at?: any;
  contract?: ContractInterface[];
  job?: JobInterface;
  user?: UserInterface;
  _count?: {
    contract?: number;
  };
}

export interface ProposalGetQueryInterface extends GetQueryInterface {
  id?: string;
  cover_letter?: string;
  job_id?: string;
  freelancer_id?: string;
}
