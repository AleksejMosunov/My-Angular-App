export interface ToDo {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  finished: boolean;
  startedAt?: Date;
  finishedAt?: Date;
  started: boolean;
  status: 'pending' | 'in-progress' | 'completed';
}
