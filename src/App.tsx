import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
import AppLayOut from "./components/UI/AppLayout";
import { InvoiceFormProvider } from "./context/formContext";
import { FilterProvider } from "./context/listContext";
import { DarkModeProvider } from "./context/themeContext";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <InvoiceFormProvider>
          <FilterProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayOut />}>
                  <Route index path="/" element={<Home />}></Route>
                  <Route path="/invoice/:id" element={<Invoice />}></Route>
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "var(--color-grey-0)",
                  color: "var(--color-grey-700)",
                },
              }}
            />
          </FilterProvider>
        </InvoiceFormProvider>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
