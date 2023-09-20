import { ProposalInterface } from 'interfaces/proposal';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description: string;
  rate?: number;
  hours_per_week?: number;
  project_id: string;
  created_at?: any;
  updated_at?: any;
  proposal?: ProposalInterface[];
  project?: ProjectInterface;
  _count?: {
    proposal?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  project_id?: string;
}
