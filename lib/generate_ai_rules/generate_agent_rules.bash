#!/usr/bin/env bash

set -x # Print all executed commands to the terminal
set -e # Exit immediately if a command exits with a non-zero status

scriptDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
bash "$scriptDir"/generate_agent_rules_1_lib.bash
bash "$scriptDir"/generate_agent_rules_2_copy.bash
bash "$scriptDir"/generate_agent_rules_3_combine.bash
