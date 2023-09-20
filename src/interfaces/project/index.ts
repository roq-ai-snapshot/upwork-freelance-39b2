import { JobInterface } from 'interfaces/job';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  title: string;
  description: string;
  deadline?: any;
  client_id: string;
  created_at?: any;
  updated_at?: any;
  job?: JobInterface[];
  user?: UserInterface;
  _count?: {
    job?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  client_id?: string;
}
