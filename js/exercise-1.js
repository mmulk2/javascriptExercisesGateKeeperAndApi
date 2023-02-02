import _later from 'isotropic-later';

export default async gateManager => {
    try {
        const gatesIds = await gateManager.fetchGateIdSet(),

            closedGates = [];

        for (const gateId of gatesIds) {
            const status = await gateManager.fetchGateStatus({
                gateId
            });

            if (status === 'closed') {
                closedGates.push(gateId);
            }
        }

        for (const gateId of closedGates) {
            await gateManager.openGate({
                gateId
            });
            await _later(1000);
        }

        return new Promise(resolve => {
            const checkStatus = async () => {
                let open = true;

                for (const gateId of gatesIds) {
                    const status = await gateManager.fetchGateStatus({
                        gateId
                    });

                    if (status !== 'open') {
                        open = false;
                        break;
                    }
                }

                if (open) {
                    resolve();
                } else {
                    _later(1000, checkStatus);
                }
            };

            checkStatus();
        });
    } catch (error) {
        console.error(error);
    }
};
