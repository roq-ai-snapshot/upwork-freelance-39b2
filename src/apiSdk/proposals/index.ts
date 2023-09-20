import axios from 'axios';
import queryString from 'query-string';
import { ProposalInterface, ProposalGetQueryInterface } from 'interfaces/proposal';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getProposals = async (
  query?: ProposalGetQueryInterface,
): Promise<PaginatedInterface<ProposalInterface>> => {
  const response = await axios.get('/api/proposals', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createProposal = async (proposal: ProposalInterface) => {
  const response = await axios.post('/api/proposals', proposal);
  return response.data;
};

export const updateProposalById = async (id: string, proposal: ProposalInterface) => {
  const response = await axios.put(`/api/proposals/${id}`, proposal);
  return response.data;
};

export const getProposalById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/proposals/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteProposalById = async (id: string) => {
  const response = await axios.delete(`/api/proposals/${id}`);
  return response.data;
};
