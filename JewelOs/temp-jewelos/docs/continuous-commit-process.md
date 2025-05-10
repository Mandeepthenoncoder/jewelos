# JewelOS Continuous Commit Process

This document outlines the continuous commit process for the JewelOS project.

## Why Continuous Commits?

Continuous commits provide several benefits:
- Regular activity on the repository
- Easier tracking of development progress
- Smaller, more manageable changes
- Continuous integration and testing
- Better visibility for all stakeholders

## Commit Schedule

The repository is configured with automated commits that occur:
- Every weekday (Monday-Friday) at 12:00 UTC
- These commits update a timestamp file to show repository activity

## Manual Commit Guidelines

When making manual commits, please follow these guidelines:

1. **Commit Frequently**: Make small, focused commits rather than large, monolithic ones
2. **Use the Commit Template**: Run `git commit` using the provided template
3. **Follow the Conventional Commit Format**:
   - `feat`: A new feature
   - `fix`: A bug fix
   - `docs`: Documentation only changes
   - `style`: Changes that do not affect the meaning of the code
   - `refactor`: A code change that neither fixes a bug nor adds a feature
   - `test`: Adding missing tests or correcting existing tests
   - `chore`: Changes to the build process or auxiliary tools

4. **Provide Context**: Explain why the change was made, not just what was changed

## Setting Up Your Local Environment

1. Clone the repository
   ```bash
   git clone https://github.com/Mandeepthenoncoder/jewelos.git
   cd jewelos
   ```

2. Set up the commit template
   ```bash
   git config --local commit.template .github/commit-template.txt
   ```

3. Run the setup script (one-time setup)
   ```bash
   # On Linux/Mac
   ./scripts/setup-repo.sh
   
   # On Windows
   scripts\setup-repo.bat
   ```

## Continuous Integration

All commits trigger our CI/CD pipeline, which:
1. Runs linting and type checking
2. Executes automated tests
3. Builds the application
4. Reports any issues

Please ensure your commits maintain a passing build status.

## GitHub Actions

The repository uses GitHub Actions for automation:
- Scheduled commits (as described above)
- Dependency updates
- Issue management
- Pull request workflows

To trigger a manual workflow run, visit the Actions tab on GitHub and select "Continuous Commits" workflow, then click "Run workflow". 