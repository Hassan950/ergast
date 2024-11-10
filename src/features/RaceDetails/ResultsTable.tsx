import { Result } from './types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const ResultsTable = ({ results }: { results: Result[] }) => {
  return (
    <>
      <Typography variant="h5">Participating Drivers</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Nationality</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((r) => (
              <TableRow key={r.Driver.code}>
                <TableCell>{r.position}</TableCell>
                <TableCell>
                  {r.Driver.givenName} {r.Driver.familyName}
                </TableCell>
                <TableCell>{r.Driver.nationality}</TableCell>
                <TableCell>{r.Time?.time || r.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ResultsTable;
