import { ProposalInterface } from 'interfaces/proposal';
import { GetQueryInterface } from 'interfaces';

export interface ContractInterface {
  id?: string;
  start_date?: any;
  end_date?: any;
  rate?: number;
  hours_per_week?: number;
  proposal_id: string;
  created_at?: any;
  updated_at?: any;

  proposal?: ProposalInterface;
  _count?: {};
}

export interface ContractGetQueryInterface extends GetQueryInterface {
  id?: string;
  proposal_id?: string;
}
