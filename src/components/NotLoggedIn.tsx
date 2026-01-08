import { Box, Typography } from '@mui/material';

export function NotLoggedIn() {
  return (
    <Box>
      <Typography variant={'h2'}>This text should convice ppl to log inn</Typography>
      <Typography variant={'body1'}>
        <p>
          In the modern digital landscape, sharing a file is more than just a data transfer; it is an act of digital
          bridge-building. It is the moment an idea escapes the isolation of a single hard drive and begins its journey
          through the collective mind of a team, a community, or the world.
        </p>

        <p>
          The true wonder of file sharing lies in its ability to <strong>democratize knowledge</strong>. Whether it’s an
          open-source codebase that allows a student in a remote village to learn at the same pace as a Silicon Valley
          engineer, or a shared design document that lets three people in different time zones build a skyscraper
          together, sharing removes the friction of distance. It turns "my work" into "our project."
        </p>

        <p>
          Technologically, we’ve moved from the physical exchange of floppy disks to the near-instantaneous
          synchronization of the cloud. This transition has shifted our focus from the <em>medium</em> to the message.
          When we share files seamlessly, we are effectively sharing time—saving the hours that would have been lost to
          manual delivery and instead investing them in collaboration and iteration.
        </p>

        <p>
          For a developer, sharing a file is an invitation for a peer review, a contribution, or an inspiration. It is
          the heartbeat of the open-source movement, proving that when we stop hoarding our digital fragments and start
          connecting them, the resulting whole is always infinitely more powerful than the sum of its parts.
        </p>

        <p>
          In a world of "read-only" silos, the "share" button is a declaration of
          <strong>collaboration over competition</strong>.
        </p>
      </Typography>
    </Box>
  );
}
