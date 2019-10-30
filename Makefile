hooks:
	@\cp ./scripts/git-hook-prepare-commit-msg.sh .git/hooks/prepare-commit-msg
	@chmod +rx .git/hooks/prepare-commit-msg
