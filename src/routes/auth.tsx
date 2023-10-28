// uses https://hanko.io authentication
// it renders hanko web components: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md
// on sign up, creates a user in DB or logs in if user already exists
export default function SignInPage() {
  return (
    <>
      <style></style>
      <div class="text-white bg-neutral-950">
        <div class="">
          <div class="flex flex-col items-center h-screen justify-center ">
            <div class="flex flex-col items-center p-10 rounded-lg border bg-black border-gray-200">
              <div class="text-xl font-bold">Sign in / up with</div>
              {/* @ts-ignore */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
