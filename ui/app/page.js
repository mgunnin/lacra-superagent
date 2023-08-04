// This code imports the HomeClientPage component from the client-page file.
// This component contains the landing page for the client.
// The metadata object contains the title and description of the landing page.
// The Dashboard component returns the HomeClientPage component.

import HomeClientPage from "./client-page";

export const metadata = {
  title: "Home | Lacra Labs",
  description: "Be the future of AI Athletes.",
};

export default async function Dashboard() {
  return <HomeClientPage />;
}
